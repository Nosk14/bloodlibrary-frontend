FROM python:3.8-slim
ENV FLASK_APP /usr/local/app/app.py
ENV FORM KUoEoOhpIpMPF7Lmpkdjsp2Axp5Bke
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY bloodlibrary /usr/local/app/
WORKDIR /usr/local/app/
CMD gunicorn -w 2 -b 0.0.0.0:5000 --log-level DEBUG app:app