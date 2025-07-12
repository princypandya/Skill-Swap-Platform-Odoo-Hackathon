from sqlalchemy import Table, Column, Integer, ForeignKey, String
from sqlalchemy.orm import relationship
# from .role_permissions import role_permissions
from ..db import Base

class UserAvailability(Base):
    __tablename__ = 'useravailabilitys'
    id = Column(Integer, primary_key=True)
    Availability = Column(String(45))
    userId = Column(String(45), ForeignKey('user.id'))

    user = relationship("User", back_populates="availabilities")