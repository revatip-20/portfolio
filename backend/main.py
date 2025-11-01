from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from models import Contact

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Allow requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "FastAPI backend is live 🚀"}

@app.post("/contact")
def create_contact(data: dict, db: Session = Depends(get_db)):
    contact = Contact(name=data["name"], email=data["email"], message=data["message"])
    db.add(contact)
    db.commit()
    return {"success": True, "message": "Message saved successfully!"}
