from fastapi_utils.inferring_router import InferringRouter
from fastapi_utils.cbv import cbv
from fastapi import Depends
from sqlalchemy.orm import Session, joinedload
from typing import List
from auth.security import hash_password
from Model.db import get_db
from Model import User, ProfileUser, Skills, UserSkills, Requested, Feedback, UserAvailability, UserWanted
from Schema import (
    AppUserCreate, UserAPPOut,
    AppSkillCreate, AppSkillOut,
    AppUserSkillCreate, AppUserSkillOut,
    AppRequestedCreate, AppRequestedOut,
    AppFeedbackCreate, AppFeedbackOut,
    AppAvailabilityCreate, AppAvailabilityOut, UserOut
)

UserInfo = InferringRouter()

@cbv(UserInfo)
class API:

    # ---------- User ----------
    @UserInfo.post("/users")
    def create_user(self, user: AppUserCreate, db: Session = Depends(get_db)):
        # 1. Create user profile in `skillswap.user`
        profile = ProfileUser(
            Name=user.name,
            Location=user.location,
            Image=user.image,
            Email=user.email
        )
        db.add(profile)
        db.commit()
        db.refresh(profile)

        # 2. Create auth user in `usercredentials.users` with FK to profile
        auth_user = User(
            username=user.email,  # or any unique identifier
            password_hash=hash_password(user.password),
            UserId=profile.id     # Link to skillswap.user.id
        )
        db.add(auth_user)
        db.commit()
        db.refresh(auth_user)

        # return auth_user

    @UserInfo.get("/getAppUser", response_model=List[UserAPPOut])
    def get_users(self, db: Session = Depends(get_db)):
        users = db.query(ProfileUser).options(
            joinedload(ProfileUser.skills_have).joinedload(UserSkills.skill),
            joinedload(ProfileUser.skills_want).joinedload(UserWanted.skill),
        ).all()
        # for user in users:
        #     print(UserOut.from_orm(user).dict())

        # print([user.Name for user in users])  # confirm the attribute exists and has values
        return users

    # ---------- Skills ----------
    @UserInfo.post("/skills", response_model=AppSkillOut)
    def create_skill(self, skill: AppSkillCreate, db: Session = Depends(get_db)):
        db_skill = Skills(**skill.dict())
        db.add(db_skill)
        db.commit()
        db.refresh(db_skill)
        return db_skill

    @UserInfo.get("/skills", response_model=List[AppSkillOut])
    def get_skills(self, db: Session = Depends(get_db)):
        return db.query(Skills).all()


    # ---------- User Skills ----------
    @UserInfo.post("/user-skills")
    def add_user_skill(self, data: AppUserSkillCreate, db: Session = Depends(get_db)):
        db_user_skill = UserSkills(**data.dict())
        db.add(db_user_skill)
        db.commit()
        return {"msg": "Skill added to user"}

    @UserInfo.get("/user-skills", response_model=List[AppUserSkillOut])
    def get_user_skills(self, db: Session = Depends(get_db)):
        return db.query(UserSkills).all()


    # ---------- Requested ----------
    @UserInfo.post("/requests", response_model=AppRequestedOut)
    def create_request(self, req: AppRequestedCreate, db: Session = Depends(get_db)):
        db_req = Requested(**req.dict())
        db.add(db_req)
        db.commit()
        db.refresh(db_req)
        return db_req

    @UserInfo.get("/requests", response_model=List[AppRequestedOut])
    def get_requests(self, db: Session = Depends(get_db)):
        return db.query(Requested).all()


    # ---------- Feedback ----------
    @UserInfo.post("/feedbacks", response_model=AppFeedbackOut)
    def give_feedback(self, feedback: AppFeedbackCreate, db: Session = Depends(get_db)):
        db_feedback = Feedback(**feedback.dict())
        db.add(db_feedback)
        db.commit()
        db.refresh(db_feedback)
        return db_feedback

    @UserInfo.get("/feedbacks", response_model=List[AppFeedbackOut])
    def get_feedbacks(self, db: Session = Depends(get_db)):
        return db.query(Feedback).all()


    # ---------- User Availability ----------
    @UserInfo.post("/availability", response_model=AppAvailabilityOut)
    def create_availability(self, availability: AppAvailabilityCreate, db: Session = Depends(get_db)):
        db_avail = UserAvailability(**availability.dict())
        db.add(db_avail)
        db.commit()
        db.refresh(db_avail)
        return db_avail

    @UserInfo.get("/availability", response_model=List[AppAvailabilityOut])
    def get_availability(self, db: Session = Depends(get_db)):
        return db.query(UserAvailability).all()
