from flask import Flask, render_template, jsonify, request, send_from_directory
from dotenv import load_dotenv
from send_email import send_email
from sql_connection import sql_db
from password_manager import hash_password, check_password
import mimetypes
import logging



load_dotenv()



app = Flask(__name__, static_folder='static', static_url_path='/static')
mimetypes.add_type('application/wasm', '.wasm')

logging.basicConfig(level=logging.DEBUG)
app.logger.setLevel(logging.DEBUG)


# @app.route('/static/<path:filename>')
# def static_files(filename):
#     return send_from_directory('static', filename, as_attachment=False)


@app.route('/static/<path:filename>')
def static_files(filename):
    accept_encoding = request.headers.get('Accept-Encoding', '')

    # Check if Gzip is supported and the file has a .gz version
    gzipped_file = f"{filename}.gz"
    if 'gzip' in accept_encoding and os.path.exists(os.path.join(app.static_folder, gzipped_file)):
        return send_from_directory(app.static_folder, gzipped_file, mimetype=_get_mime_type(filename), headers={'Content-Encoding': 'gzip'})

    # Fallback to uncompressed file
    return send_from_directory(app.static_folder, filename)


def _get_mime_type(filename):
    # Map file extensions to MIME types
    if filename.endswith('.wasm'):
        return 'application/wasm'
    elif filename.endswith('.js'):
        return 'application/javascript'
    elif filename.endswith('.data'):
        return 'application/octet-stream'
    elif filename.endswith('.html'):
        return 'text/html'
    else:
        return 'application/octet-stream'



@app.route('/', methods=['GET', 'POST'])
def index():
	return render_template("index.html")



@app.route('/NoahsNavWeb', methods=['GET', 'POST'])
def NoahsNavWeb():
    return render_template("NoahsNav.html")







if __name__ == '__main__':
	# app.run(debug=True,  host='0.0.0.0', port = 5002)
	app.run(debug=False,  host='0.0.0.0', port = 8080)








