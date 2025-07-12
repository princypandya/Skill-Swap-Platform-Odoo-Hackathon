from pydantic import BaseModel
from typing import Optional, List


# ---------- USER ----------
class AppUserCreate(BaseModel):
    name: str
    email: str
    password: str
    confirm_password: str
    visibility: Optional[str] = "public"
    location: Optional[str] = ""
    image: Optional[str] = None

class SkillOut(BaseModel):
    skill: str

    class Config:
        from_attributes = True

class UserOut(BaseModel):
    id: int
    name: str
    userskills: List[SkillOut]
    wantedskills: List[SkillOut]

    class Config:
        from_attributes = True

class AppUserCreates(BaseModel):
    Name: str
    Location: Optional[str] = None
    Image: Optional[str] = None

class AppUserOut(AppUserCreates):
    id: int

    class Config:
        orm_mode = True


# ---------- SKILLS ----------
class AppSkillCreate(BaseModel):
    Skills: str

class AppSkillOut(AppSkillCreate):
    id: int

    class Config:
        orm_mode = True


# ---------- USER SKILLS ----------
class AppUserSkillCreate(BaseModel):
    user: int
    skills: int

class AppUserSkillOut(AppUserSkillCreate):
    class Config:
        from_attributes = True


# ---------- REQUESTED ----------
class AppRequestedCreate(BaseModel):
    userRequested: int
    userResived: int
    Accepted: bool

class AppRequestedOut(AppRequestedCreate):
    id: int

    class Config:
        orm_mode = True


# ---------- FEEDBACK ----------
class AppFeedbackCreate(BaseModel):
    request: int
    comment: str

class AppFeedbackOut(AppFeedbackCreate):
    id: int

    class Config:
        orm_mode = True


# ---------- AVAILABILITY ----------
class AppAvailabilityCreate(BaseModel):
    Availability: str
    userId: str

class AppAvailabilityOut(AppAvailabilityCreate):
    id: int

    class Config:
        orm_mode = True
