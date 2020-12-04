import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Flask() {
  return (
    <div>
      <h1 className="d-flex justify-content-center m-5 font-weight-bold">FLASK CODE TEMPLATES</h1>
      <h4>install flask and my favorite packages with flask</h4>
      <SyntaxHighlighter language="python">
        {`
        pip3 install flask flask-cors flash-limiter
        `}
      </SyntaxHighlighter>
      <h4>GET, POST method with and access user data from POST</h4>
      <div>
        <SyntaxHighlighter language="python">
          {`
          from flask import Flask, request
          app = Flask(__name__)

          @app.route('/api/requestExample',methods = ['POST', 'GET'])
          def request_examples():
             if request.method == 'POST':
                content = request.get_json(silent=True)
                print(content)
                message = {
                    'method': 'POST',
                    'message': 'post request was a success!',
                    'content': content 
                }
                return message 
             if request.method =='GET':
                return  'this is get from /api/requestExample'

          if __name__=='__main__':
            app.run(debug=True)
          `}
        </SyntaxHighlighter>
        <h4>access parameters from query string</h4>
        <SyntaxHighlighter language="jsx">
          {`
          from flask import Flask, request,render_template 
          app = Flask(__name__)
          ##example url: http://localhost:5000/data1?test1=thisisfromtest&test2=thisisfromtest2
          @app=.route('/data1', methods=['GEt'])
          def data1(): 
              test1 = request.args.get('test1')
              test2 = request.args.get('test2')
              message = {
                  'from_test1': test1, 
                  'from_test2': test2
              }
              return message 
          ##should return json with the value from test1 and test2 from url

          if __name__=='__main__':
            app.run(debug=True)
        `}
        </SyntaxHighlighter>
        <h4>Rate limiter and CORS for production</h4>
        <SyntaxHighlighter language="python">
          {`

            from flask import Flask, request,render_template, flask_cors

            ## other pip installs 
            from flask_limiter import Limiter
            from flask_limiter.util import get_remote_address 
            from flask_cors import CORS

            app = Flask(__name__)
            CORS(app) ## default allow all domains

            ## limiter code ... 
            ## https://flask-limiter.readthedocs.io/en/stable/
            limiter = Limiter (
                app,
                key_func = get_remote_address, 
                default_limits= ["10 per second"]
            )
                `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
