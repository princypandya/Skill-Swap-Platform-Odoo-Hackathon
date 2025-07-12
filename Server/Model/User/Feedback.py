from sqlalchemy import Table, Column, Integer, ForeignKey, Text
from sqlalchemy.orm import relationship
# from .role_permissions import role_permissions
from ..db import Base
class Feedback(Base):
    __tablename__ = 'feedback'
    __table_args__ = {'schema': 'skillswap'}

    id = Column(Integer, primary_key=True)
    request_id = Column(Integer, ForeignKey('skillswap.requested.id'))
    comment = Column(Text)

    request = relationship("Requested", back_populates="feedbacks")  # Renamed from request_obj
