import util from 'util';
import Alert from './Alert';

function abbrevCurrency(amount) {
  if (amount < 100000000) {
    return util.formatCurrency(amount);
  }
  return util.formatCurrencyAbbrev(amount);
}

const template = data => `
<div class="alert-message alert-market-report">
  <img src="assets/company/market.png" class="alert-icon">
  <h1>Market Report</h1>
  <p>We captured <span class="market-report-share">${data.marketShare}%</span> of the market, representing a base revenue of <span class="market-report-base-revenue">${abbrevCurrency(data.baseRevenue)}</span>.</p>
  <ul class="market-report-bonuses">
    <li>x${data.spendingMultiplier} from consumer spending bonuses</li>
    <li>x${data.hypeMultiplier} from hype</li>
    <li>x${data.influencerMultiplier} from social media influencers</li>
    ${data.newDiscoveryMuliplier > 1 ? `<li>x${data.newDiscoveryMuliplier} from the new product bonus</li>` : ''}
  </ul>
  <div class="market-report-revenue">
    <h3>First week revenue projections</h3>
    <h1>${abbrevCurrency(data.revenue)}</h1>
  </div>
  <div class="alert-actions">
    <button class="dismiss-alert">OK</button>
  </div>
</div>
`

class MarketReport extends Alert {
  constructor() {
    super({
      template: template,
      handlers: {
        '.dismiss-alert': function() {
          this.remove();
        }
      }
    });
  }
}

export default MarketReport;