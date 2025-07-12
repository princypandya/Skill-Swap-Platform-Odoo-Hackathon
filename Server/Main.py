from fastapi import FastAPI


# from apscheduler.schedulers.background import BackgroundScheduler
from fastapi.middleware.cors import CORSMiddleware
# scheduler = BackgroundScheduler()
import uvicorn


from Schema import *
from Model import *


from Model.db import Base, engine


import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)

from auth import auth_router

from Routes import *



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
 )




@app.on_event("startup")
def startup_event():
    
    # scheduler.add_job(call_my_api, "cron", hour=2, minute=0)  # 🔁 Daily at 2:00 AM
    # scheduler.start()
    
    print(" Initializing database...")
    Base.metadata.create_all(bind=engine)
    print(" Database tables are ready.")



app.include_router(auth_router)



# Add this block to run with `python main.py`
if __name__ == "__main__":
     uvicorn.run("Main:app", host="127.0.0.1", port=8000)


        