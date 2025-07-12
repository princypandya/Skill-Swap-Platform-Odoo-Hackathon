from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship
from ..db import Base

class ProfileUser(Base):
    __tablename__ = 'user'
    __table_args__ = {'schema': 'skillswap'}

    id = Column(Integer, primary_key=True)
    Name = Column(String(45))
    Location = Column(Text)
    Image = Column(Text)
    Email = Column(String(45), nullable=False)

    availabilities = relationship("UserAvailability", back_populates="user")
    # skills user has
    skills_have = relationship("UserSkills", back_populates="user")
    # skills user wants
    skills_want = relationship("UserWanted", back_populates="user")
    requests_made = relationship("Requested", foreign_keys='Requested.userRequested', back_populates="requester")
    requests_received = relationship("Requested", foreign_keys='Requested.userResived', back_populates="receiver")

    @property
    def userskills(self):
        return [us.skill for us in self.skills_have]

    @property
    def wantedskills(self):
        return [uw.skill for uw in self.skills_want]