import { DataSource } from "typeorm"
import path from "path"

// Configuração do SQLite
const AppDataSource = new DataSource({
    type: "sqlite",
    database: path.resolve(__dirname, "database.sqlite"),
    entities: [
        path.resolve(__dirname, "..", "entities", "*.{js,ts}")
    ],
    migrations: [
        path.resolve(__dirname, "..", "migrations", "*.{js,ts}")
    ],
    synchronize: true, // Apenas para desenvolvimento
    logging: false // Altere para true para ver as queries
})

export { AppDataSource }