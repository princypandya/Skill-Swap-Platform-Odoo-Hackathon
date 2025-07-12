from sqlalchemy import Table, Column, Integer, ForeignKey, Text
from sqlalchemy.orm import relationship
# from .role_permissions import role_permissions
from ..db import Base
class Feedback(Base):
    __tablename__ = 'feedback'
    id = Column(Integer, primary_key=True)
    request = Column(Integer, ForeignKey('requested.id'))
    comment = Column(Text)

    request_obj = relationship("Requested", back_populates="feedbacks")
