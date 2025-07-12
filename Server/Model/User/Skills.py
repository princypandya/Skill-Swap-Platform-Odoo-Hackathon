from sqlalchemy import Table, Column, Integer, ForeignKey, String
from sqlalchemy.orm import relationship
# from .role_permissions import role_permissions
from ..db import Base

class Skills(Base):
    __tablename__ = 'skills'
    __table_args__ = {'schema': 'skillswap'}
    id = Column(Integer, primary_key=True)
    Skills = Column(String(45))

    users_have = relationship("UserSkills", back_populates="skill")
    # Users who WANT this skill
    users_want = relationship("UserWanted", back_populates="skill")