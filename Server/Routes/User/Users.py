from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringUserInfo
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from Model.db import get_db
from Model import User, Skills, UserSkills, Requested, Feedback, UserAvailability

from Schema import (
    UserCreate, UserOut,
    SkillCreate, SkillOut,
    UserSkillCreate, UserSkillOut,
    RequestedCreate, RequestedOut,
    FeedbackCreate, FeedbackOut,
    AvailabilityCreate, AvailabilityOut,
)

UserInfo = InferringUserInfo()

@cbv(UserInfo)
class API:
    # ---------- User ----------
    @UserInfo.post("/users/", response_model=UserOut)
    def create_user(self, user: UserCreate, db: Session = Depends(get_db)):
        db_user = User(**user.dict())
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user

    @UserInfo.get("/users/", response_model=List[UserOut])
    def get_users(self, db: Session = Depends(get_db)):
        return db.query(User).all()


    # ---------- Skills ----------
    @UserInfo.post("/skills/", response_model=SkillOut)
    def create_skill(self, skill: SkillCreate, db: Session = Depends(get_db)):
        db_skill = Skills(**skill.dict())
        db.add(db_skill)
        db.commit()
        db.refresh(db_skill)
        return db_skill

    @UserInfo.get("/skills/", response_model=List[SkillOut])
    def get_skills(self, db: Session = Depends(get_db)):
        return db.query(Skills).all()


    # ---------- User Skills ----------
    @UserInfo.post("/user-skills/")
    def add_user_skill(self, data: UserSkillCreate, db: Session = Depends(get_db)):
        db_user_skill = UserSkills(**data.dict())
        db.add(db_user_skill)
        db.commit()
        return {"msg": "Skill added to user"}

    @UserInfo.get("/user-skills/", response_model=List[UserSkillOut])
    def get_user_skills(self, db: Session = Depends(get_db)):
        return db.query(UserSkills).all()


    # ---------- Requested ----------
    @UserInfo.post("/requests/", response_model=RequestedOut)
    def create_request(self, req: RequestedCreate, db: Session = Depends(get_db)):
        db_req = Requested(**req.dict())
        db.add(db_req)
        db.commit()
        db.refresh(db_req)
        return db_req

    @UserInfo.get("/requests/", response_model=List[RequestedOut])
    def get_requests(self, db: Session = Depends(get_db)):
        return db.query(Requested).all()


    # ---------- Feedback ----------
    @UserInfo.post("/feedbacks/", response_model=FeedbackOut)
    def give_feedback(self, feedback: FeedbackCreate, db: Session = Depends(get_db)):
        db_feedback = Feedback(**feedback.dict())
        db.add(db_feedback)
        db.commit()
        db.refresh(db_feedback)
        return db_feedback

    @UserInfo.get("/feedbacks/", response_model=List[FeedbackOut])
    def get_feedbacks(self, db: Session = Depends(get_db)):
        return db.query(Feedback).all()


    # ---------- User Availability ----------
    @UserInfo.post("/availability/", response_model=AvailabilityOut)
    def create_availability(self, availability: AvailabilityCreate, db: Session = Depends(get_db)):
        db_avail = UserAvailability(**availability.dict())
        db.add(db_avail)
        db.commit()
        db.refresh(db_avail)
        return db_avail

    @UserInfo.get("/availability/", response_model=List[AvailabilityOut])
    def get_availability(self, db: Session = Depends(get_db)):
        return db.query(UserAvailability).all()
