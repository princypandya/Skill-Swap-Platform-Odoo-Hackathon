from sqlalchemy import Column, Integer, ForeignKey, String
from sqlalchemy.orm import relationship
from ..db import Base
# from .Users import ProfileUser  # import the related model

class UserAvailability(Base):
    __tablename__ = 'useravailabilitys'
    __table_args__ = {'schema': 'skillswap'}

    id = Column(Integer, primary_key=True)
    Availability = Column(String(45))
    userId = Column(Integer, ForeignKey('skillswap.user.id'))  # Integer here!

    user = relationship("ProfileUser", back_populates="availabilities")
