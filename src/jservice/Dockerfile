# Stage 1: Clone jService Fork
FROM alpine/git AS git-clone

# Clone the repo into /src
RUN git clone https://github.com/NieldSWND/jService.git /src

# Stage 2: jService Ruby Image
FROM ruby:3.4.1

WORKDIR /app

# Copy Gemfiles & Install Dependencies
COPY --from=git-clone /src/Gemfile* .
RUN bundle install

# Copy remaining files from cloned repo
COPY --from=git-clone /src .
COPY /overrides/. .

# Copy the entrypoint script
COPY entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh

# Set entrypoint
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

CMD ["rails", "s", "-b", "0.0.0.0"]
