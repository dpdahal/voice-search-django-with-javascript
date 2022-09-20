from django.shortcuts import render
from .models import Course

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


# Create your views here.

@csrf_exempt
def index(request):
    if request.method == "POST":
        criteria = request.POST.get('voice_data')
        # search data from database
        criteria = criteria.lower()
        courses = Course.objects.filter(name__icontains=criteria)
        return JsonResponse({'courses': list(courses.values())})
    else:
        data = {
            'courseData': Course.objects.all()
        }
        return render(request, 'index.html', data)
