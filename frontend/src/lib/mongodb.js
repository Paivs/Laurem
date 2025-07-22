import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  // maxPoolSize: 10,            // Número máximo de conexões no pool
  // minPoolSize: 2,             // Número mínimo de conexões mantidas
  // connectTimeoutMS: 5000,     // Tempo limite para conexão inicial
  // socketTimeoutMS: 30000,     // Tempo limite para operações
  // serverSelectionTimeoutMS: 5000, // Tempo para selecionar servidor
  // retryWrites: true,          // Re-tenta automaticamente writes falhos
  // retryReads: true,           // Re-tenta automaticamente reads falhos
  // heartbeatFrequencyMS: 10000, // Intervalo de checagem de conexão
  // appName: 'laurem',     // Identifica sua aplicação no MongoDB
};

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}


let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // Em desenvolvimento, reutiliza a conexão global
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
    console.log('Created new MongoDB connection in development');
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Em produção, cria nova conexão
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  console.log('Created new MongoDB connection in production');
}

// Função auxiliar para testar a conexão
async function testConnection() {
  try {
    const tempClient = await clientPromise;
    await tempClient.db().admin().ping();
    console.log('MongoDB connection is healthy');
    return true;
  } catch (error) {
    console.error('MongoDB connection test failed:', error);
    return false;
  }
}

// Exporta a conexão principal e a função de teste
export { clientPromise, testConnection };