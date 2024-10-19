import { ClarifaiStub, grpc } from 'clarifai-nodejs-grpc';

// Set up the Clarifai Stub and authenticate using the PAT
const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();
metadata.set("authorization", `Key ${process.env.NEXT_PUBLIC_CLARIFAI_PAT}`); // Use an environment variable for the API key

export async function POST(req) {
  try {
    // Parse the incoming JSON to get the base64 image data
    const { image } = await req.json();

    // Validate the image data
    if (!image || typeof image !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Invalid image data provided.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Clarifai model setup
    const response = await new Promise((resolve, reject) => {
      stub.PostModelOutputs(
        {
          model_id: "aaa03c23b3724a16a56b629203edc62c", // Clarifai's general image recognition model ID
          inputs: [
            {
              data: {
                image: {
                  base64: image,
                },
              },
            },
          ],
        },
        metadata,
        (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        }
      );
    });

    // Check if Clarifai returned a successful response
    if (response.status.code !== 10000) {
      throw new Error(`Clarifai API Error: ${response.status.description}`);
    }

    // Prediction response to frontend
    const result = response.outputs[0].data.concepts;
    return new Response(
      JSON.stringify({ result }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('AI processing error occurred:', error.message);

    // Return error response
    return new Response(
      JSON.stringify({ error: 'Error analyzing image. Please try again.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// Handle other HTTP methods (e.g., GET)
export function GET(req) {
  return new Response(
    JSON.stringify({ message: 'Welcome to the AI Scan API. Send a POST request with image data.' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
