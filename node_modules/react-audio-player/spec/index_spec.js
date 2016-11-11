import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import ReactAudioPlayer from '../src/index.jsx';
import song from './fixtures/turkish_march.ogg';

describe('ReactAudioPlayer', function() {
  it('renders an audio element', function() {
    const instance = ReactTestUtils.renderIntoDocument(
      <ReactAudioPlayer />
    );

    const instanceEl = ReactDOM.findDOMNode(instance);

    expect(instanceEl.tagName).toBe('AUDIO');
  });

  describe('when can play', function() {
    it('calls onCanPlay', function(done) {
      var onCanPlay = jasmine.createSpy('onCanPlay').and.callFake(function() {
        expect(onCanPlay).toHaveBeenCalled();
        done();
      });

      ReactTestUtils.renderIntoDocument(
        <ReactAudioPlayer
          src={song}
          autoPlay="true"
          onCanPlay={onCanPlay}
        />
      );
    });
  });

  describe('when can play the entire file', function() {
    it('calls onCanPlayThrough', function(done) {
      var onCanPlayThrough = jasmine.createSpy('onCanPlayThrough').and.callFake(function() {
        expect(onCanPlayThrough).toHaveBeenCalled();
        done();
      });

      ReactTestUtils.renderIntoDocument(
        <ReactAudioPlayer
          src={song}
          autoPlay="true"
          onCanPlayThrough={onCanPlayThrough}
        />
      );
    });
  });
});
