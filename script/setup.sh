CONCENTRATION_VERSION='0.1'

start_server() {
  sleep 4
  open http://localhost:8080
}

echo "==> ensuring wget installation"
command -v wget || brew install wget

echo "==> installing concentration..."
mkdir concentration
cd concentration
wget "https://github.com/hamholla/concentration/archive/$CONCENTRATION_VERSION.zip"

echo "==> unzipping..."
unzip -a "$CONCENTRATION_VERSION.zip"

cd "concentration-$CONCENTRATION_VERSION"

echo "==> running npm install..."
npm install

echo "==> starting server and opening in browser..."
start_server &
npm start
