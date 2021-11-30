from django.contrib import admin
from .models import LanguageItem, LargeProjectBox, TerminalText, SmallProjectBox, AboutPageContent, WorkExperience, Education, relevantclass, Experience

# Register your models here.

admin.site.register(LanguageItem)
admin.site.register(LargeProjectBox)
admin.site.register(TerminalText)
admin.site.register(SmallProjectBox)


admin.site.register(AboutPageContent)

admin.site.register(WorkExperience)
admin.site.register(Education)
admin.site.register(relevantclass)

admin.site.register(Experience)