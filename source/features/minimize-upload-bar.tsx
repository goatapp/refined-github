import './minimize-upload-bar.css';
import * as pageDetect from 'github-url-detection';

import features from '.';

void features.addCssFeature(import.meta.url, [pageDetect.hasRichTextEditor]);
