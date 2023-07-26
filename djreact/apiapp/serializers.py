from rest_framework import serializers
from .models import Article, Comment, Category, Mail

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'author_name', 'text', 'created_at')

class MailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mail
        fields = ('id', 'name', 'email', 'text', 'created_at')

class ArticleCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'text', 'created_at', 'cover')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    comment = CommentSerializer(many=True, read_only=True)
    category = CategorySerializer(many=True, read_only=True)
    class Meta:
        model = Article
        fields = ('id', 'title', 'text', 'created_at', 'comment', 'cover', 'category')

