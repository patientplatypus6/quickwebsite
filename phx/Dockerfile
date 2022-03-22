#FROM ubuntu:latest
FROM alpine:latest

COPY . .

#WORKDIR ./phx

#RUN apt-get update -y
#RUN apt-get install wget -y
#RUN wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && dpkg -i erlang-solutions_2.0_all.deb
#RUN sudo apt-get update
#RUN sudo apt-get install esl-erlang
#RUN sudo apt-get install elixi
RUN apk add inotify-tools
RUN apk add elixir

#RUN echo "mix deps.get"
#RUN mix deps.get
RUN echo "mix local.hex --force"
RUN mix local.hex --force
RUN echo "mix deps.get"
RUN mix deps.get
RUN echo "mix local.rebar --force"
RUN mix local.rebar --force
RUN echo "mix phx.server"

EXPOSE 4000

ENTRYPOINT ["sh", "./entrypoint.sh"]
