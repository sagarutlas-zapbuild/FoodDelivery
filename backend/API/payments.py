from rest_framework.response import Response
from rest_framework.decorators import api_view

import stripe

# Set your secret key. Remember to switch to your live secret key in production!
# See your keys here: https://dashboard.stripe.com/account/apikeys
stripe.api_key = 'sk_test_aQNa5hwbTUjxHyrIBA0di3zB001B2Z6Q9u'

intent = stripe.PaymentIntent.create(
  amount=1099,
  currency='inr',
  # Verify your integration in this guide by including this parameter
  metadata={'integration_check': 'accept_a_payment'},
)

@api_view(['GET'])
def secret(request):
    return Response(intent.client_secret)
     