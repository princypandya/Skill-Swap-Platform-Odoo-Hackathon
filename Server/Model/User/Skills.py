from sqlalchemy import Table, Column, Integer, ForeignKey, String
from sqlalchemy.orm import relationship
# from .role_permissions import role_permissions
from ..db import Base

class Skills(Base):
    __tablename__ = 'skills'
    id = Column(Integer, primary_key=True)
    Skills = Column(String(45))

    users = relationship("UserSkills", back_populates="skill")
