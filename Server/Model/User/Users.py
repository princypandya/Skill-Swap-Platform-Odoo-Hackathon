from sqlalchemy import Column, Integer, String, Text, ForeignKey, Boolean
from sqlalchemy.orm import relationship, declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    Name = Column(String(45))
    Location = Column(Text)
    Image = Column(Text)

    availabilities = relationship("UserAvailability", back_populates="user")
    skills = relationship("UserSkills", back_populates="user")
    requests_made = relationship("Requested", foreign_keys='Requested.userRequested', back_populates="requester")
    requests_received = relationship("Requested", foreign_keys='Requested.userResived', back_populates="receiver")
