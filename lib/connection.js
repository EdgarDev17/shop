import mongoose from 'mongoose'

// const URI_MONGO = process.env.URI_MONGO
const URI_MONGO = 'mongodb://localhost:27017/Tienda'


if (!URI_MONGO) {
    throw new Error(
        'Por favor define una variable de entorno con la uri de la base de datos'
    )
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function connectionDB() {
    if (cached.conn) {
        console.log('mongo is working 🚀')
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(URI_MONGO, opts).then((mongoose) => {
            console.log('mongo is working 🚀')
            return mongoose
        })
    }
    console.log('mongo is working 🚀')
    cached.conn = await cached.promise
    return cached.conn
}

export default connectionDB