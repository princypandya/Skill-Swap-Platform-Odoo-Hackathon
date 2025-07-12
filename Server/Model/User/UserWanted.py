from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from ..db import Base

class UserWanted(Base):
    __tablename__ = 'userswanted'
    __table_args__ = {'schema': 'skillswap'}

    userId = Column(Integer, ForeignKey('skillswap.user.id'), primary_key=True)
    skillsId = Column(Integer, ForeignKey('skillswap.skills.id'), primary_key=True)

    user = relationship("ProfileUser", back_populates="skills_want")
    skill = relationship("Skills", back_populates="users_want")