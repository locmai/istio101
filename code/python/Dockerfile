FROM python:3.6.6-alpine3.6

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

EXPOSE 5000

CMD python main.py