from django.conf.urls import url, include
from .views import LargeProjectBoxViewSet, TerminalTextViewSet, SmallProjectBoxViewSet, AboutPageContentViewSet, EducationViewSet, WorkExperienceViewSet, ExperienceViewSet
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'LargeProjectBoxViewSet', LargeProjectBoxViewSet, basename='ProjectBox')

TerminalRouter = DefaultRouter()
TerminalRouter.register(r'TerminalText', TerminalTextViewSet, basename="TerminalText")

SmallBoxRouter = DefaultRouter()
SmallBoxRouter.register(r'SmallProjectBox', SmallProjectBoxViewSet, basename="SmallProjectBox")

AboutPageContentRouter = DefaultRouter()
AboutPageContentRouter.register(r'AboutPage', AboutPageContentViewSet, basename="AboutPage")

EducationRouter = DefaultRouter()
EducationRouter.register(r'Education', EducationViewSet, basename="Education")

WorkExperienceRouter = DefaultRouter()
WorkExperienceRouter.register(r'WorkExperience', WorkExperienceViewSet, basename="WorkExperience")

ExperienceRouter = DefaultRouter()
ExperienceRouter.register(r'Experience', ExperienceViewSet, basename="Experience")

urlpatterns = [
    url(r'^',include(router.urls)),
    url(r'^',include(TerminalRouter.urls)),
    url(r'^',include(SmallBoxRouter.urls)),
    url(r'^',include(AboutPageContentRouter.urls)),
    url(r'^',include(EducationRouter.urls)),
    url(r'^',include(WorkExperienceRouter.urls)),
    url(r'^',include(ExperienceRouter.urls)),
]