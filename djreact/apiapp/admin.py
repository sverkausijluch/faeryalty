from django.contrib import admin
from .models import Article, Comment, Category, Mail, SuperArticle

admin.site.register(Article)
admin.site.register(Comment)
admin.site.register(Category)
admin.site.register(Mail)
admin.site.register(SuperArticle)
