import stripe

# Set your secret key. Remember to switch to your live secret key in production!
# See your keys here: https://dashboard.stripe.com/account/apikeys
stripe.api_key = 'pk_test_DQjcWLXYdErrPXNJZQtR6r1W008whQOVW5'

intent = stripe.PaymentIntent.create(
  amount=1099,
  currency='inr',
  # Verify your integration in this guide by including this parameter
  metadata={'integration_check': 'accept_a_payment'},
)