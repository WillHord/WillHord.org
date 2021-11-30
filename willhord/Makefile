all: FrontEnd/build run

FrontEnd/build: clearFrontEndBuild
	yarn --cwd ./FrontEnd build

clearFrontEndBuild:
	rm -rf ./FrontEnd/build

migrate:
	python manage.py makemigrations
	python manage.py migrate

restart:
	apache2ctl restart

run: migrate
	rm -rf ./static
	python manage.py collectstatic
	systemctl restart apache2
