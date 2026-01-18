# 🎬 AI Video Studio

Generate stunning videos using AI with customizable durations (8, 16, or 30 seconds).

## Features

✨ **AI Video Generation** - Create videos from text prompts using Replicate API  
⏱️ **Custom Durations** - Choose from 8, 16, or 30 second videos  
📹 **Video Preview** - Preview videos before downloading  
⬇️ **Download MP4** - Download generated videos as MP4 files  
🎨 **Professional UI** - Beautiful, modern interface  

## Quick Start

### 1. Get Your API Key (FREE)
- Go to https://replicate.com
- - Sign up for free
  - - Copy your API token from Account Settings
   
    - ### 2. Clone & Deploy
   
    - **Option A: Deploy to Vercel (Recommended - 1 click)**
    - ```bash
      # Click the button below
      # Deploy button will be added here
      ```

      **Option B: Run Locally**
      ```bash
      git clone https://github.com/cantgetwrite44/ai-video-studio.git
      cd ai-video-studio
      npm install
      npm run dev
      ```

      ### 3. Set Your API Key
      - Enter your Replicate API key in the app
      - - It's saved locally in your browser
       
        - ### 4. Generate Videos!
        - - Enter your prompt (e.g., "A person dancing with neon colors")
          - - Select duration (8, 16, or 30 seconds)
            - - Click "Generate Video with AI"
              - - Wait 1-2 minutes for AI to create your video
                - - Download the MP4 file
                 
                  - ## How It Works
                 
                  - 1. **You describe** what video you want
                    2. 2. **AI creates** the video using Replicate's text-to-video models
                       3. 3. **You download** the MP4 file
                          4. 4. **Use anywhere** - Share on TikTok, Instagram, YouTube, etc.
                            
                             5. ## Tech Stack
                            
                             6. - **Frontend**: HTML, CSS, JavaScript (Vanilla)
                                - - **Backend**: Node.js, Express
                                  - - **AI**: Replicate API (Pika Labs models)
                                    - - **Hosting**: Vercel (Free tier)
                                     
                                      - ## Environment Variables
                                     
                                      - Create a `.env` file in the root directory:
                                     
                                      - ```
                                        REPLICATE_API_TOKEN=your_token_here
                                        PORT=3000
                                        ```

                                        ## Project Structure

                                        ```
                                        ai-video-studio/
                                        ├── public/
                                        │   └── index.html
                                        ├── server.js
                                        ├── package.json
                                        ├── .env.example
                                        └── README.md
                                        ```

                                        ## API Endpoints

                                        ### POST `/api/generate-video`
                                        Generate a new video

                                        **Request:**
                                        ```json
                                        {
                                          "prompt": "A person dancing with vibrant colors",
                                          "duration": "16"
                                        }
                                        ```

                                        **Response:**
                                        ```json
                                        {
                                          "predictionId": "xyz123",
                                          "status": "processing"
                                        }
                                        ```

                                        ### GET `/api/video-status/:predictionId`
                                        Check video generation status

                                        **Response:**
                                        ```json
                                        {
                                          "status": "succeeded",
                                          "videoUrl": "https://..."
                                        }
                                        ```

                                        ## Pricing

                                        - **Replicate API**: $0.01 per second of video (~$0.08 - $0.30 per video)
                                        - - **Vercel Hosting**: FREE
                                          - - **Total Cost**: ~$0.10 per video
                                           
                                            - Free tier available at Replicate.com
                                           
                                            - ## Troubleshooting
                                           
                                            - **"Invalid API Key"**
                                            - - Check you copied the full token from Replicate
                                              - - Make sure there are no extra spaces
                                               
                                                - **"Video generation timeout"**
                                                - - AI videos take 1-2 minutes to generate
                                                  - - Wait patiently or refresh the page
                                                   
                                                    - **"Preview unavailable"**
                                                    - - Videos are stored on Replicate's servers
                                                      - - They may expire after 24 hours
                                                       
                                                        - ## Support
                                                       
                                                        - - GitHub Issues: https://github.com/cantgetwrite44/ai-video-studio/issues
                                                          - - Replicate Docs: https://replicate.com/docs
                                                           
                                                            - ## License
                                                           
                                                            - MIT License - Feel free to use and modify!
