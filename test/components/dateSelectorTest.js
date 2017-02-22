import React from 'react';
import { shallow, mount } from 'enzyme';
import DateSelector from 'components/dateSelector';

describe('<DateSelector />', function () {

  beforeEach(function () {
    this.date = new Date(2017, 0);
    this.component = shallow(<DateSelector date={this.date} />);
   // this.mountedComponent = mount(<DateSelector date={this.date} />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "row"', function () {
      expect(this.component.hasClass('row')).to.equal(true);
    });

    it('should have span with date', function() {
        //console.log(this.component.debug());
        expect(this.component.find('.date-text')).to.have.length(1);
        expect(this.component.contains(<span className="date-text">January 2017</span>)).to.equal(true);
    });

    /*it('should have span with date (mounted)', function() {
        console.log(this.mountedComponent.debug());
        expect(this.mountedComponent.find('.date-text')).to.have.length(1);
        expect(this.mountedComponent.contains(<span class="date-text">January 2017</span>)).to.equal(true);
    });*/
  });
});
