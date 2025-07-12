from pydantic import BaseModel, Field
from typing import List, Optional

# ---------- SKILLS ----------
class SkillOut(BaseModel):
    skill: str = Field(alias="Skills")  # ✅ map the DB field 'Skills' to 'skill'

    class Config:
        from_attributes = True
        populate_by_name = True


# ---------- USER ----------
class UserAPPOut(BaseModel):
    id: int
    username: str  # mapped from `Name` via @property in SQLAlchemy model
    Location: Optional[str] = None
    Image: Optional[str] = None
    Email: Optional[str] = None
    userskills: List[SkillOut] = []
    wantedskills: List[SkillOut] = []

    class Config:
        from_attributes = True


# ---------- USER CREATE ----------
class AppUserCreate(BaseModel):
    name: str
    email: str
    password: str
    confirm_password: str
    visibility: Optional[str] = "public"
    location: Optional[str] = ""
    image: Optional[str] = None


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
        from_attributes = True


# ---------- FEEDBACK ----------
class AppFeedbackCreate(BaseModel):
    request: int
    comment: str

class AppFeedbackOut(AppFeedbackCreate):
    id: int

    class Config:
        from_attributes = True


# ---------- AVAILABILITY ----------
class AppAvailabilityCreate(BaseModel):
    Availability: str
    userId: str

class AppAvailabilityOut(AppAvailabilityCreate):
    id: int

    class Config:
        from_attributes = True


# ---------- SKILL CREATE/READ ----------
class AppSkillCreate(BaseModel):
    Skills: str

class AppSkillOut(AppSkillCreate):
    id: int

    class Config:
        from_attributes = True
