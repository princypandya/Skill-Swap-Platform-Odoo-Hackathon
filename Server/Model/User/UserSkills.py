from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from ..db import Base

class UserSkills(Base):
    __tablename__ = 'userskills'
    __table_args__ = {'schema': 'skillswap'}

    userId = Column(Integer, ForeignKey('skillswap.user.id'), primary_key=True)
    skillsId = Column(Integer, ForeignKey('skillswap.skills.id'), primary_key=True)

    user = relationship("ProfileUser", back_populates="skills_have")
    skill = relationship("Skills", back_populates="users_have")
