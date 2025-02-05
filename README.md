# LDM Vercel API Template

This template provides a simple counter API using Vercel's Serverless Functions and KV store.

## Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)
- A Vercel account

## Getting Started

### 1. Install Vercel CLI

First, install the Vercel CLI globally on your machine:

```bash
npm install -g vercel
```

### 2. Clone the Template

Clone this repository or use it as a template to create a new project.

### 3. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd ldm-vercel-api-template
npm install
```

### 4. Configure Vercel KV

To use Vercel KV, you need to set it up in your Vercel project:

1. Log in to your Vercel account in the CLI:
```bash
vercel login
```

2. Link your project to Vercel:
```bash
vercel link
```

3. Create a new KV database:
   - Go to the [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to your project
   - Click on the "Storage" tab
   - Click "Create" and select "Upstash for Redis"
   - Follow the prompts to create your KV database

4. Add KV to your project:
```bash
vercel kv add
```
Select the KV database you just created.


5. Pull environment variables:

- Open `.env.local` and update the values:
- `KV_REST_API_URL` and `KV_REST_API_TOKEN` will be automatically filled by the `vercel env pull` command.
- Set `KV_NAMESPACE` to a unique identifier for your project (e.g., "myproject").

After setting up KV, you need to pull the environment variables to your local development environment:
```bash
vercel env pull .env.local
```
This command will create a `.env.local` file with the necessary KV connection details.

Then you should change the `.env.local` to `.env`


### 5. Local Development

To run the project locally:

```bash
vercel dev
```

This will start a local development server, typically at `http://localhost:3000`.

### 6. Testing the API

- To get the current count:
  ```
  GET http://localhost:3000/api/get-count
  ```

- To increment the count:
  ```
  POST http://localhost:3000/api/increment-count
  ```

### 7. Deployment

To deploy your project to Vercel:

```bash
vercel deploy --prod
```

This will deploy your project and provide you with a production URL.


### 8. Viewing Deployed Project

After deployment, you can view your project details in the Vercel dashboard:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. You can see deployment details, environment variables, and more



## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel KV Documentation](https://vercel.com/docs/storage/vercel-kv)

## Support

If you encounter any issues or have questions, please open an issue in this repository.
```
