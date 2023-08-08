from django.db import models
from PIL import Image
from django_ckeditor_5.fields import CKEditor5Field

class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Article(models.Model):
    title = models.CharField(max_length=120)
    text = CKEditor5Field(max_length=10000, verbose_name='Текст', config_name='extends')
    created_at = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(upload_to='covers', blank=True)
    category = models.ManyToManyField(Category)

    def save(self, *args, **kwargs):
        super().save()
        if self.cover:
            img = Image.open(self.cover.path)

            if img.height > 600 or img.width > 1200:
                output_size = (1200, 600)
                img.thumbnail(output_size)
                img.save(self.cover.path)

    def __str__(self):
        return self.title

class SuperArticle(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)

class Comment(models.Model):
    text = models.TextField(max_length=1000)
    author_name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comment')

class Mail(models.Model):
    text = models.TextField(max_length=1000)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name