import { AppDataSource } from "./data-source"

// Função equivalente ao createConnection antigo
async function createConnection() {
    try {
        await AppDataSource.initialize()
        console.log("✅ Conexão com SQLite estabelecida")
        return AppDataSource
    } catch (error) {
        console.log("❌ Erro na conexão:", error)
        throw error
    }
}

// Exporta tanto a DataSource quanto a função createConnection
export { AppDataSource, createConnection }

// Exporta por padrão a função createConnection
export default createConnection