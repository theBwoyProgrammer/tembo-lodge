# Pesapal Cloudflare Worker

This Worker handles PesaPal API calls without exposing the consumer secret to the
browser. The same Worker can be switched between sandbox and production.

Deploy from this directory:

```sh
npx wrangler deploy
```

## Production configuration

First complete your live PesaPal merchant onboarding and obtain the **production**
consumer key and consumer secret. Do not put either value in the frontend `.env`
file, Git, or Vercel.

In the PesaPal production API, register this IPN URL:

```text
https://tembo-pesapal.hatimeddinani.workers.dev/ipn
```

Use `POST` as the notification type and save the returned production `ipn_id`.
The sandbox IPN ID cannot be reused in production.

Configure these **Production secrets** in Cloudflare:

- `PESAPAL_CONSUMER_KEY`
- `PESAPAL_CONSUMER_SECRET`
- `PESAPAL_IPN_ID`

Configure these **Production variables**:

- `PESAPAL_ENV`: set exactly to `production`
- `WORKER_URL`: the deployed Worker URL
- `FRONTEND_URL`: the deployed website URL
- `FIREBASE_API_KEY`: the Firebase web API key
- `FIREBASE_PROJECT_ID`: `hatimdev-he`

The production API base URL is:

```text
https://pay.pesapal.com/v3
```

After changing the variables or secrets, redeploy the Worker or use Cloudflare's
production environment deployment controls. The frontend can continue using the
same `VITE_PESAPAL_WORKER_URL` value because the Worker URL does not change.

Before taking a real payment, test:

1. An admin creates a reservation with a positive amount.
2. The generated link opens on the live PesaPal checkout.
3. PesaPal returns to `/payment-result` through the Worker callback.
4. `/status?OrderTrackingId=...` reports the final live transaction status.
5. The production IPN reaches `/ipn`.

The frontend sends a Firebase ID token to `/create-payment`. The Worker validates
the token through Firebase Authentication before creating a Pesapal order.
