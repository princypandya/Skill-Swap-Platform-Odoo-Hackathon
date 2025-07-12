from sqlalchemy import Table, Column, Integer, ForeignKey, String, Boolean
from sqlalchemy.orm import relationship
# from .role_permissions import role_permissions
from ..db import Base

class Requested(Base):
    __tablename__ = 'requested'
    id = Column(Integer, primary_key=True)
    userRequested = Column(Integer, ForeignKey('user.id'))
    userResived = Column(Integer, ForeignKey('user.id'))
    Accepted = Column(Boolean)

    requester = relationship("User", foreign_keys=[userRequested], back_populates="requests_made")
    receiver = relationship("User", foreign_keys=[userResived], back_populates="requests_received")
    feedbacks = relationship("Feedback", back_populates="request")
