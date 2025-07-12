from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
# from .role_permissions import role_permissions
from ..db import Base
    
class UserSkills(Base):
    __tablename__ = 'userskills'
    user = Column(Integer, ForeignKey('user.id'), primary_key=True)
    skills = Column(Integer, ForeignKey('skills.id'), primary_key=True)

    user_obj = relationship("User", back_populates="skills")
    skill = relationship("Skills", back_populates="users")
    