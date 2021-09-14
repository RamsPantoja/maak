import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axiosInstance from '../../../utils/axios_instance';

//Opciones para configurar el provedor de inicio de sesion con la liberia next-auth.js
const options = {
    providers: [
        //Inicio de sesion con el provedor Credentials, el cual utiliza la autenticacion de usuario haciendo una consulta a la base de datos.
        Providers.Credentials({
            name: 'Cuenta usuario',
            credentials: {
                usuario: { type: 'text', label: 'Correo Electrónico'},
                contrasena: { type: 'password', label: 'Contraseña'}
            },
            authorize: async (credentials) => {
                //Fetch usuario desde la api.   
                return new Promise((resolve, rejects) => {
                    axiosInstance.post('/autenticacion/autenticar', credentials)
                    .then((res) => {
                        if (res.status == 200 && res.data) {
                            resolve(res.data.data[0])
                        }
                    })
                    .catch((error) => {
                        if (error) {
                            resolve(null)
                        }
                    })
                })
            }
        })
    ],
    //Funciones callback previas al inicio de sesion.
    callbacks: {
        //Esta funcion asigna la key nombre, entre otras key, al json web token para despues tener acceso a esas keys.
        async jwt(token, user) {
            if (user) {
                token.email = user.correo;
                token.firstname = user.nombre;
                token.registeredProfile = user.perfilRegistrado;
                token.mainProfile = user.perfilPrincipal;
                token.profiles = user.perfiles
            }

            return token;
        },

        //Inserta una cookie en el client para mantener la sesion activa, con los datos que existen en el jwt.
        async session(session, token) {
            return {
                ...session,
                user: {
                    email: token.email,
                    firstname: token.firstname,
                    registeredProfile: token.registeredProfile,
                    mainProfile: token.mainProfile,
                    profiles: token.profiles
                }
            }
        }
    },
    pages: {
        signIn: '../../sign_in',
        error: '../../sign_in'
    },
    //Secreto para encriptar el token.
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    }

}

const auth = async (req, res) => {
    return NextAuth(req, res, options);
}

export default auth;