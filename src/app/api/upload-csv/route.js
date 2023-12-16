import { createPool } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import papaparse from 'papaparse'; // Install papaparse for parsing CSV data

export async function POST(request) {
    console.log(request)
//   try {
//     // Connect to your Vercel PostgreSQL database
//     const pool = createPool({
//       databaseUrl: process.env.DATABASE_URL, // Replace with your actual database URL
//     });

//     // Create the table for the CSV data (adapt the schema to match your actual needs)
//     const createTableQuery = sql`
//       CREATE TABLE IF NOT EXISTS csv_data (
//         first_name varchar(255) NOT NULL,
//         middle_init varchar(50) DEFAULT NULL,
//         last_name varchar(255) NOT NULL,
//         prefix varchar(50) DEFAULT NULL,
//         address varchar(255) NOT NULL,
//         city varchar(255) NOT NULL,
//         state varchar(50) NOT NULL,
//         zip_code varchar(20) NOT NULL,
//         phone_number varchar(50) DEFAULT NULL,
//         email varchar(255) NOT NULL UNIQUE,
//         county varchar(255) NOT NULL,
//         estimated_income varchar(50) NOT NULL
//       );
//     `;

//     await pool.query(createTableQuery);

//     // Read the CSV file from the request body (adapt based on your upload mechanism)
//     const file = await request.files.get('your_file_field_name'); // Replace with your actual field name
//     const fileBuffer = await file.arrayBuffer();

//     // Parse the CSV data using papaparse
//     const parsedCsvData = papaparse.parse(fileBuffer, { header: true }).data;

//     // Upload data to the table using a loop and prepared statements
//     for (const row of parsedCsvData) {
//       const { firstName, middleInit, lastName, ...otherData } = row; // Destructure the row data

//       const query = sql`
//         INSERT INTO csv_data (
//           first_name,
//           middle_init,
//           last_name,
//           ... // Include remaining columns
//         )
//         VALUES ($1, $2, $3, ...); // Bind the extracted values
//       `;

//       await pool.query(query, [firstName, middleInit, lastName, ...Object.values(otherData)]);
//     }

//     // Send success response to the client
//     return NextResponse.json({ message: 'Data uploaded successfully!' }, { status: 200 });
//   } catch (error) {
//     console.error(error); // Log the error for debugging

//     // Send error response to the client
//     return NextResponse.json({ error: 'Error uploading data' }, { status: 500 });
//   } finally {
//     // Close the database connection pool
//     await pool.end();
//   }
}