import React from 'react';
import { shallow } from 'enzyme';
import DateSelector from 'components/dateSelector';

describe('<DateSelector />', function () {

  beforeEach(function () {
    this.date = new Date(2017, 0);
    this.component = shallow(<DateSelector date={this.date} />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "row"', function () {
      expect(this.component.hasClass('row')).to.equal(true);
    });

    it('should have span with date', function () {
      expect(this.component.find('.date-text')).to.have.length(1);
      expect(this.component.contains(<span className="date-text">January 2017</span>)).to.equal(true);
    });
  });
});
