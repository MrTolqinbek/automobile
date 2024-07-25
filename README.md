# 🚗 **Automobile Management App** 🚗

Welcome to the Automobile Management App! This project allows you to manage and interact with a database of cars. Follow the instructions below to get started with your development setup.

## Getting Started

### 1. Install Dependencies

First, ensure you have all the necessary npm packages installed:

```bash
npm install
```

### 2. Create .env file it contains :
```bash
database_port=5432
database_host=localhost
database_password=postgres
database_username=postgres
database_name=automobile
```
### 3. Start the Application
Once the database is seeded, you can start the application in development mode using:

```bash
npm run start:dev
```
### 4. Seed the Database
After installing the npm packages, you'll need to populate the database with some initial car data. Run the following command to seed the database:

```bash
ts-node src/helpers/seed/automobile.seed.ts
```


Contributing
Feel free to contribute to this project! Please open issues or submit pull requests with any improvements or fixes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Let me know if there's anything else you'd like to add or adjust!
