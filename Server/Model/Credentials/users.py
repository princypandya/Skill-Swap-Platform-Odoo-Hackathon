from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .user_roles import user_roles
from ..db import Base

class User(Base):
    __tablename__ = 'users'
    __table_args__ = {'schema': 'usercredentials'}
    id = Column(Integer, primary_key=True)
    username = Column(String(45), unique=True, nullable=False)
    password_hash = Column(String(45), nullable=False)
    UserId = Column(Integer, ForeignKey("skillswap.user.id"), nullable=False)
    # UserId = Column(Integer, nullable=False)
    
    roles = relationship("Role", secondary=user_roles, back_populates="users")
    