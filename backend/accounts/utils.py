from .serializers import UserSerializer


def jwt_response_handler(token, user=None, request=None):
    userdata = {}
    print(user)
    serializer = UserSerializer(user, context={'request': request})
    if serializer.data['id']:
        userdata['id'] = serializer.data.get('id')
        userdata['email'] = serializer.data.get('email')
        userdata['name'] = serializer.data.get('name')
        print(userdata,"\n\n\n")
        return {
            'token': token,
            'user': userdata
        }
    else:
        return(serializer.errors)

